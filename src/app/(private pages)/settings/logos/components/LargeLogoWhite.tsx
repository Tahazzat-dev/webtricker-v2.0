"use client";
import { EditPenIcon } from "@/app/(private pages)/components/Icons";
import { useUpdateSiteLogoMutation } from "@/redux/features/logos/logosApiSlice";
import { updateLightLargeLogo } from "@/redux/features/logos/siteLogoSlice";
import { useUploadMutation } from "@/redux/features/upload/uploadApiSlice";
import { RootState } from "@/redux/store";
import Button from "@/sharedComponets/ui/buttons/Button";
import LoadingSpinner from "@/sharedComponets/ui/loading/LoadingSpinner";
import { TUploadResponse } from "@/types/data";
import Image from "next/image";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const MAX_IMAGE_SIZE = 1 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = "image/";
const fallbackUrl =
  "https://res.cloudinary.com/dirjayri8/raw/upload/v1748532597/k0tyb0wshuc3ei0oqvae.svg";

export default function LargeLogoWhite() {
  const dispatch = useDispatch();
  const { isLoading, isError, lightLargeLogo, defaultLogos } = useSelector(
    (state: RootState) => state.siteLogo
  );
  const [updateLogo, { isLoading: isUpdating }] = useUpdateSiteLogoMutation();
  const [upload, { isLoading: isUploading }] = useUploadMutation();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [newImage, setNewImage] = useState<string | null>(null);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);

  // Clean up the object URL when the component unmounts or new file is selected
  useEffect(() => {
    return () => {
      if (newImage) {
        URL.revokeObjectURL(newImage);
      }
    };
  }, [newImage]);

  // handlers
  const handleEditClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      toast.error("No file selected");
      return;
    }

    // File type check
    if (!file.type.startsWith(ACCEPTED_FILE_TYPES)) {
      toast.error("Only image files are allowed.");
      return;
    }

    // File size check (1MB = 1024 * 1024 bytes)
    if (file.size > MAX_IMAGE_SIZE) {
      toast.error("Image size should be less than or equal to 1MB.");
      return;
    }

    // Valid image file
    setFileToUpload(file);
    const previewUrl = URL.createObjectURL(file);
    setNewImage(previewUrl);
  };

  const handleSelectDefault = async () => {
    if (!defaultLogos?.lightLargeLogo) return;
    try {
      const res = await updateLogo({
        lightLargeLogo: defaultLogos?.lightLargeLogo,
      }).unwrap();

      if (res.success && res?.data?.lightLargeLogo) {
        dispatch(updateLightLargeLogo(res.data.lightLargeLogo));
      }
    } catch (error) {
      toast.error("Error reseting");
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    if (!fileToUpload) return;

    const formData = new FormData();
    formData.append("files", fileToUpload);

    const result: TUploadResponse = await upload(formData).unwrap();
    if (!result?.uploadedFiles?.[0]) {
      toast.error("faild to upload");
      return;
    }

    try {
      const res = await updateLogo({
        lightLargeLogo: result.uploadedFiles[0],
      }).unwrap();
      if (res.success && res?.data?.lightLargeLogo) {
        setNewImage(null);
        dispatch(updateLightLargeLogo(res.data.lightLargeLogo));
      }
    } catch (error) {
      toast.error("Failed to update logo");
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-[300px] flex items-center justify-center">
        <LoadingSpinner className="w-8 h-8" />
      </div>
    );
  }

  if (isError) return <p className="text-red-400">Error loading image</p>;

  const isProcessing = isUpdating || isUploading;

  return (
    <>
      <div className="w-full max-w-[300px] relative">
        <Image
          src={newImage || lightLargeLogo || fallbackUrl}
          width={200}
          height={100}
          className="bg-black border border-slate-500 rounded-[10px] z-10 p-2 md:p-5 md:px-10 md:w-[300px] h-auto object-cover"
          alt="Site logo large"
        />

        <button
          disabled={isProcessing}
          onClick={handleEditClick}
          className="absolute top-[50%] right-0 translate-x-[50%] translate-y-[-50%] bg-white dark:bg-black dark:text-white p-1.5 border rounded-full z-20"
        >
          <EditPenIcon />
        </button>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <div className="w-full items-start gap-5 flex flex-wrap">
        {!!newImage && (
          <>
            <Button
              disabled={isProcessing}
              className={`!py-2 !px-4`}
              label="Cancel"
              cb={() => setNewImage(null)}
            />
            {!!isProcessing ? (
              <LoadingSpinner className="w-8 h-8" />
            ) : (
              <Button
                className="!py-2 !px-4"
                label="Update"
                cb={handleUpdate}
              />
            )}
          </>
        )}

        {!!defaultLogos?.lightLargeLogo &&
        defaultLogos.lightLargeLogo !== lightLargeLogo && (
            <Button
             disabled={isProcessing}
              className="!py-2 !px-4"
              label="Default"
              cb={handleSelectDefault}
            />
          )
      }
      </div>
    </>
  );
}
