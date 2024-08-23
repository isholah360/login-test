import { apiSlice } from "./apiSlice";

const AUTH_URL = "/api/auth";
const ONBOARD_URL = "/api/onboarding";
const USERS_URL = "/api/users";
const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "Post",
        body: data,
      }),
    }),
    requestResetPassword: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/request-password-reset`,
        method: "Post",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ data }) => ({
        url: `${AUTH_URL}/reset-password`,
        method: "Post",
        body: data,
      }),
    }),
    personalInfo: builder.mutation({
      query: ({ data }) => ({
        url: `${ONBOARD_URL}/personal-info`,
        method: "Post",
        body: data,
      }),
    }),
    businessInfo: builder.mutation({
      query: ({ data }) => ({
        url: `${ONBOARD_URL}/business-info`,
        method: "Post",
        body: data,
      }),
    }),
    selectPrice: builder.mutation({
      query: ({ data }) => ({
        url: `${ONBOARD_URL}/select-pricing`,
        method: "Post",
        body: data,
      }),
    }),
    payMethod: builder.mutation({
      query: ({ data }) => ({
        url: `${ONBOARD_URL}/payment-method`,
        method: "Post",
        body: data,
      }),
    }),
    terms: builder.mutation({
      query: ({ data }) => ({
        url: `${ONBOARD_URL}/agree-terms`,
        method: "Post",
        body: data,
      }),
    }),
    createTenant: builder.mutation({
      query: ({ data }) => ({
        url: `${ONBOARD_URL}/create-tenant`,
        method: "Post",
        body: data,
      }),
    }),
    getAllUser: builder.mutation({
      query: ({ data }) => ({
        url: `${USERS_URL}`,
        method: "Get",
        body: data,
      }),
    }),
    getUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `${USERS_URL}/${id}`,
        method: "Get",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRequestResetPasswordMutation,
  useResetPasswordMutation,
  usePersonalInfoMutation,
  useBusinessInfoMutation,
  useTermsMutation,
  useCreateTenantMutation,
  usePayMethodMutation,
  useSelectPriceMutation,
  useGetUserQuery,
  useGetAllUserQuery
} = userApiSlice;
