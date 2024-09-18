"use client";
import { useCallback, useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import toast, { Toaster } from "react-hot-toast";

type ValueProps = {
  name: string;
  size: number | string;
};

const Page = () => {
  const [files, setFiles] = useState<ValueProps[]>([]);

  const handleDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const newFiles: ValueProps[] = [];

      for (const file of acceptedFiles) {
        newFiles.push({
          name: file.name,
          size: file.size,
        });
      }

      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    },
    [files],
  );

  const handleRejection = useCallback((rejected: FileRejection[]) => {
    rejected.forEach((file) => {
      console.log(file);
      toast.error(`Upload failed`, { position: "bottom-right" });
    });
  }, [files]);

  const focusedStyle = {
    borderColor: "transparent",
    outline: "none",
  };

  const style = (isFocused: boolean) => ({
    ...(isFocused ? focusedStyle : {}),
  });

  return (
    <>
    <Toaster />
    <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">
      <div className="sm:col-span-1 bg-white p-4 rounded-lg">
        <div className="flex flex-row text-black">
          <div> Add new files </div>
        </div>

        <div className="flex justify-center text-black p-4">
          <Dropzone
            accept={{
              "image/jpeg": [],
              "image/png": [],
              "application/pdf": [],
            }}
            maxSize={10000000}
            onDropAccepted={handleDrop}
            onDropRejected={handleRejection}
            autoFocus={false}
            noClick={true}
          >
            {({ getRootProps, getInputProps, isFocused }) => (
              <section className="h-32 justify-center content-center flex items-center">
                <div {...getRootProps({ style: style(isFocused) })}>
                  <input {...getInputProps()} />
                  Drag & Drop
                  <div className="text-xs">
                    JPG, PNG, or PDF file size no more than 10MB
                  </div>
                </div>
              </section>
            )}
          </Dropzone>
        </div>

        {files?.length == 0 && (
          <div className="flex items-center justify-center space-x-2">
            <div className="h-px flex-grow bg-[#D0D7DE]"></div>
            <div className="text-black">or</div>
            <div className="h-px flex-grow bg-[#D0D7DE]"></div>
          </div>
        )}

        <div className="pt-4">
          <Dropzone
            accept={{
              "image/jpeg": [],
              "image/png": [],
              "application/pdf": [],
            }}
            maxSize={10000000}
            onDropAccepted={handleDrop}
            onDropRejected={handleRejection}
            noDrag
          >
            {({ getRootProps, getInputProps }) => (
              <section className="h-8 flex justify-center items-center rounded-lg text-white bg-blue-700 text-center cursor-pointer">
                <div {...getRootProps()}>
                  <input {...getInputProps()} className="hidden" />
                  Select File
                </div>
              </section>
            )}
          </Dropzone>
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;
