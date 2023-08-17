import { toast } from "sonner";

const useToast = () => {
  const descriptionToast = (title: string, description: string) => {
    toast.message(title, {
      description,
    });
  };

  const defaultToast = (title: string) => {
    toast(title);
  };

  const successToast = (title: string) => {
    toast.success(title);
  };

  const errorToast = (title: string) => {
    toast.error(title);
  };

  return {
    descriptionToast,
    defaultToast,
    successToast,
    errorToast,
  };
};

export default useToast;
