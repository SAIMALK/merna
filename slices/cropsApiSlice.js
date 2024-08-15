import { CROPS_URL , UPLOAD_URL} from '../constants';
import { apiSlice } from './apiSlice';

export const cropsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCrops: builder.query({
      query: ({ keyword, pageNumber }) => ({
        url: CROPS_URL,
        params: { keyword, pageNumber },
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Crop'],
    }),
    
    getCropDetails: builder.query({
      query: (cropId) => ({
        url: `${CROPS_URL}/${cropId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createCrop: builder.mutation({
      query: () => ({
        url: CROPS_URL,
        method: 'POST',
      }),
      invalidatesTags: ['Crop'],
    }),
    updateCrop: builder.mutation({
      query: (data) => ({
        url: `${CROPS_URL}/${data.cropId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Crops'],
    }),
    uploadCropCover: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: 'POST', 
        body: data,
      }),
    }),
    deleteCrop: builder.mutation({
      query: (cropId) => ({
        url: `${CROPS_URL}/${cropId}`,
        method: 'DELETE',
      }),
      providesTags: ['Crop'],
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `${CROPS_URL}/${data.cropId}/reviews`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Crop'],
    }),
    getTopCrops: builder.query({
      query: () => `${CROPS_URL}/top`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetCropsQuery,
  useGetCropDetailsQuery,
  useCreateCropMutation,
  useUpdateCropMutation,
  useUploadCropCoverMutation,
  useDeleteCropMutation,
  useCreateReviewMutation,
  useGetTopCropsQuery,
} = cropsApiSlice;
