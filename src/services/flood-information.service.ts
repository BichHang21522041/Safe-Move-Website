import { EInformationStatus } from "../utils/enum";
import { IFloodInformation } from "../utils/types";

const API_BASE_URL =
  "https://flood-information-service.onrender.com/api/v1/flood-information";

export const getListFloodInformationService = async ({
  status,
  search,
}: { status?: EInformationStatus; search?: string } = {}): Promise<
  IFloodInformation[]
> => {
  const url = new URL(`${API_BASE_URL}`);

  if (status !== EInformationStatus.ALL) {
    url.searchParams.append("status", String(status));
  }

  if (search) {
    url.searchParams.append("search", search);
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch flood information list");
  }
  return await response.json();
};
