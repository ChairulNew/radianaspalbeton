// configCompany.store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IConfigCompany } from "./../interface/configCompany.interface";
import axios from "axios";

interface ConfigCompanyState {
  storeCompanyData: IConfigCompany | null;
  loading: boolean;
  error: string | null;
  isFetched: boolean;
  fetchCompanyData: () => Promise<void>;
}

// @ts-ignore
const apiUrl = import.meta.env.VITE_API_URL;

const useConfigCompanyStore = create<ConfigCompanyState>()(
  persist(
    (set, get) => ({
      storeCompanyData: null,
      loading: false,
      error: null,
      isFetched: false,

      fetchCompanyData: async () => {
        if (get().isFetched) return;

        set({ loading: true, error: null });
        try {
          const response = await axios.get(`${apiUrl}/api/company`);
          set({
            storeCompanyData: response.data.data,
            loading: false,
            isFetched: true,
          });
        } catch (error) {
          set({
            error: "Failed to fetch company data",
            loading: false,
          });
          console.error("Error fetching company data:", error);
          throw error;
        }
      },
    }),
    {
      name: "config-company-storage",
      partialize: (state) => ({ storeCompanyData: state.storeCompanyData }),
    }
  )
);

export default useConfigCompanyStore;