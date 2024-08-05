import React, { useState, useEffect } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

function ImageSlider({ url = "", page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errormsg, setErrormsg] = useState(null);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrormsg(e.message);
    }
  }

  useEffect(() => {
    fetchImages(`${url}?page=${page}&limit=${limit}`);
  }, [url]);
  console.log(images);

  if (loading) {
    return <div>Loading the data !!! Please wait</div>;
  }
  if (errormsg) {
    return <div>Something went wrong!!!</div>;
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="relative flex justify-center items-center w-1/3 h-1/3">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute w-11 h-11 left-4 invert"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentSlide === index
                  ? "border shadow-md w-full h-full"
                  : "hidden"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute w-11 h-11 right-4 invert "
      />

      <span className=" flex bottom-4 absolute">
        {images && images.length
          ? images.map((_, index) => (
              <button
                onClick={() => setCurrentSlide(index)}
                className={
                  currentSlide === index
                    ? "bg-white h-4 w-4 rounded-full border-none outline-none m-1 cursor-pointer"
                    : "bg-gray-300 h-4 w-4 rounded-full border-none outline-none m-1 cursor-pointer"
                }
                key={index}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
export default ImageSlider;
