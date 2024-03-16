import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice.js';

const usersAdapter = createEntityAdapter({});
const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getAllUsers: builder.query({
			query: () => '/users/all',
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			transformResponse: response => {
				const users = response.map(user => {
					user.id = user._id;
					return user;
				});
				return usersAdapter.setAll(initialState, users);
			},
			providesTags: [{ type: 'Users', id: 'ALL' }],
		}),
	}),
});

export const { useGetAllUsersQuery } = usersApiSlice;
export const selectUsersResult = usersApiSlice.endpoints.getAllUsers.select();

const memoizedUsers = createSelector(
	selectUsersResult,
	usersResult => usersResult.data,
);

export const {
	selectAll: selectAllUsers,
	selectById: selectUserById,
	selectIds: selectUsersIds,
} = usersAdapter.getSelectors(
	state => memoizedUsers(state) ?? initialState,
);
