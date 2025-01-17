import ky from "ky";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const therapyKey = "therapy";

export const listTherapies = async () => {
  return await ky("/api/therapy").json();
};

export const createTherapy = async ({ price }) => {
  return await ky.post("/api/therapy", { json: { price } }).json();
};

export const deleteTherapy = async ({ id }) => {
  return await ky.delete(`/api/therapy/${id}`).json();
};

export const useListTherapies = () => {
  return useQuery({
    queryKey: [therapyKey],
    queryFn: listTherapies,
  });
};

export const useCreateTherapy = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ price }) => createTherapy({ price }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [therapyKey] });
    },
  });
};

export const useDeleteTherapy = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }) => deleteTherapy({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [therapyKey] });
    },
  });
};
