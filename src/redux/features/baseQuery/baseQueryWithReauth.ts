// // utils/baseQueryWithReauth.ts
// import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // interface AuthRefreshResponse {
// //     accessToken: string;
// // }

// const baseQuery = fetchBaseQuery({
//     baseUrl: "/api",
//     credentials: "include", // send cookies (refresh token stored in httpOnly cookie)
//     prepareHeaders: (headers) => {
//         // const token = getTokenFromLocalStorage();
//         // const token = (getState() as RootState).authInfo.authAccessToken;
//         // if (token) {
//         //     headers.set("Authorization", `Bearer ${token}`);
//         // }
//         return headers;
//     },
// }); 

// const baseQueryWithReauth: typeof baseQuery = async (args, api, extraOptions) => {
//     const result = await baseQuery(args, api, extraOptions);

//     // If access token is expired (401), try refreshing
//     // if (
//     //     result.error &&
//     //     (result.error as FetchBaseQueryError).status === 401
//     // ) {
//     //     const refreshResult = await baseQuery(
//     //         { url: "/auth/refresh", method: "POST" },
//     //         api,
//     //         extraOptions
//     //     );

//     //     const data = (refreshResult as { data?: AuthRefreshResponse }).data;

//     //     if (data?.accessToken) {
//     //         // Save the new access token in Redux
//     //         setTokenInLocalStorage(data.accessToken)
//     //         api.dispatch(setAuthAccessToken(data.accessToken));

//     //         // Retry the original query with new token
//     //         result = await baseQuery(args, api, extraOptions);
//     //     } else {
//     //         // Refresh failed: log the user out
//     //         api.dispatch(resetAuthInfo());
//     //         await baseQuery({ url: "/auth/logout", method: "POST" }, api, extraOptions);
//     //     }
//     // }

//     return result;
// };

// export default baseQueryWithReauth;
