import { useMutation } from "@tanstack/react-query";
import { personalDetailsService } from "../services/personalDetailsService";
import type { IPersonalDetails } from "../pages/Registration/types";

export const usePersonalDetailsMutation = (personalDetails: IPersonalDetails) => {
    return useMutation({
        mutationFn: () => personalDetailsService.sendPersonalDetails(personalDetails),
        onSuccess: () => {
            console.log("Success");
        },
        onError: (error) => {
            console.error("Error:", error);
        }
    });
};