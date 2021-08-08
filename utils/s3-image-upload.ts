import { useCallback, useEffect, useState } from "react";

function transformUploads(uploads) {
  return uploads.map((u) => ({
    original: u.imageUrl,
    thumbnail: u.thumbnailUrl,
  }));
}
export const S3ImageUpload = (): void => {
  const [images, setImages] = useState(null);

  // console.log(images);
  const fetchUploads = useCallback(() => {
    fetch("http://localhost:4000/api/s3-uploads")
      .then((response) =>
        response.json().then((data) => setImages(transformUploads(data))),
      )
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetchUploads();
  }, [fetchUploads]);
};
