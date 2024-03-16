import { apiSlice } from './apiSlice.js';
import { clearCredentials } from './authSlice.js';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		loginUser: builder.mutation({
			query: credentials => ({
				url: '/auth/login',
				method: 'POST',
				body: { ...credentials },
			}),
		}),
		logoutUser: builder.mutation({
			query: () => ({
				url: '/auth/logout',
				method: 'POST',
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					await queryFulfilled;
					dispatch(clearCredentials());
					dispatch(apiSlice.util.resetApiState());
				} catch (err) {
					console.log(err);
				}
			},
		}),
		refreshUser: builder.mutation({
			query: () => ({
				url: '/auth/refresh',
				method: 'GET',
			}),
		}),
	}),
});

export const {
	useLoginUserMutation,
	useLogoutUserMutation,
	useRefreshUserMutation,
} = authApiSlice;
