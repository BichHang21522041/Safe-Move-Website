import { Camera } from "../utils/types";

const API_BASE_URL = 'http://localhost:8004/api/v1/cameras';

export const getListCameraService = async ({ isEnabled, search }: { isEnabled?: boolean, search?: string} = {}): Promise<Camera[]> => {
  const url = new URL(`${API_BASE_URL}/cameras`);

  if (isEnabled !== undefined) {
    url.searchParams.append("is_enabled", String(isEnabled));
  }

  if (search) {
    url.searchParams.append("search", search);
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch cameras");
  }
  return await response.json();
};

export const getCameraByIdService = async (cameraId: string): Promise<Camera> => {
    const response = await fetch(`${API_BASE_URL}/cameras/${cameraId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch camera by ID');
    }
    return await response.json();
  }

export const updateCameraStatusService = async (camera_id_list: string[], is_enabled: boolean) => {
  try {
    const response = await fetch(`http://localhost:8004/api/v1/cameras/cameras/status?is_enabled=${is_enabled}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(camera_id_list),
    });

    if (!response.ok) {
      throw new Error(`Error updating cameras: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Failed to update camera status:", error);
    return null;
  }
};