import {
  Button,
  Modal,
  Label,
  TextInput,
  FileInput,
  Textarea,
  useState,
  useEffect,
  useRef,
} from "@/utils/Imports";
import {
  app,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  CircularProgressbar,
} from "@/utils/Imports";
import "react-circular-progressbar/dist/styles.css";

export default function Model_M_Slider_Images({
  data,
  setData,
  setTranslation_M_Slider_Images_EN,
  setTranslation_M_Slider_Images_AR,
  setTranslation_M_Slider_Images_DE,
}) {
  const [openModal, setOpenModal] = useState(false);

  //
  const [imagePercent, setImagePercent] = useState();
  const fileRef = useRef(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  //

  // title
  const [translateTitle, setTranslateTitle] = useState("");
  const [translateTitleInEN, setTranslateTitleInEN] = useState("");
  const [translateTitleInAR, setTranslateTitleInAR] = useState("");
  const [translateTitleInDE, setTranslateTitleInDE] = useState("");

  const handleUploadImages = async (e) => {
    const uploadedImages = [];
    const storage = getStorage(app);

    for (const image of e.target.files) {
      const imageName = new Date().getTime() + image.name;
      const storageRef = ref(storage, imageName);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setUploadingImg(true);
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImagePercent(Math.round(progress));
        },
        (error) => {
          if (error) {
            setUploadingImg(false);
            console.log("error uploading img in Slider Image", error);
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            uploadedImages.push(downloadURL);
            Promise.all(uploadedImages).then((downloadURLs) => {
              console.log(uploadedImages); //here the array is empty
              setData((prevData) => ({
                ...prevData,
                M_Slider_Images: {
                  ...prevData.M_Slider_Images,
                  imgs: downloadURLs,
                },
              }));
              setUploadingImg(false);
            });
          });
          // console.log(uploadedImages); //here the array is full and correct
        }
      );
    }

    // Wait for all uploads to finish before updating data state
      
  };

  const sanitizeTranslations = (translations) => {
    const sanitized = {};
    for (const key in translations) {
      if (key.trim() !== "") {
        sanitized[key] = translations[key];
      }
    }
    return sanitized;
  };

  useEffect(() => {
    const sanitizedTranslationEN = sanitizeTranslations({
      [data.M_Slider_Images.title]: translateTitleInEN,
    });

    const sanitizedTranslationAR = sanitizeTranslations({
      [data.M_Slider_Images.title]: translateTitleInAR,
    });

    const sanitizedTranslationDE = sanitizeTranslations({
      [data.M_Slider_Images.title]: translateTitleInDE,
    });

    setTranslation_M_Slider_Images_EN(sanitizedTranslationEN);
    setTranslation_M_Slider_Images_AR(sanitizedTranslationAR);
    setTranslation_M_Slider_Images_DE(sanitizedTranslationDE);

    // console.log("Sanitized Translations:", {
    //   en: sanitizedTranslationEN,
    //   ar: sanitizedTranslationAR,
    //   de: sanitizedTranslationDE,
    // });
  }, [data.M_Slider_Images]);

  // console.log(data.M_Slider_Images);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="w-fit">
        Slider Images
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="py-2 items-center">
          Terms of Service
        </Modal.Header>
        <Modal.Body className="px-3">
          <img src="/images/M_Slider_Images.png" alt="m intro four img" />
          <hr />
          <div className="space-y-6 mt-5">
            {/* title */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-M-Slider-Image"
                    value="title-of-M-Slider-Image"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-M-Slider-Image"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle}
                  onChange={(e) => setTranslateTitle(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitleInEN}
                  onChange={(e) => setTranslateTitleInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitleInAR}
                  onChange={(e) => setTranslateTitleInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitleInDE}
                  onChange={(e) => setTranslateTitleInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>

            <hr />
            {/* images */}
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="dropzone-file-m-slider-images"
                  hidden
                  multiple
                  ref={fileRef}
                  accept="image/*"
                  onChange={handleUploadImages}
                />
              </form>

              <Label
                htmlFor="dropzone-file-m-slider-images"
                className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> the
                    image in slider images
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG
                  </p>
                </div>
              </Label>
              <div className="relative w-40 h-40 mx-auto p-5">
                {uploadingImg && (
                  <CircularProgressbar
                    value={imagePercent}
                    text={`${imagePercent}%`}
                    strokeWidth={5}
                    styles={{
                      root: {
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: "0",
                        left: "0",
                        zIndex: "44",
                      },
                      path: {
                        stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                      },
                    }}
                  />
                )}
                {data.M_Slider_Images.imgs && (
                  <>
                    {data.M_Slider_Images.imgs.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt="dropzone-file-m-slider-images"
                        className={`object-contain w-full h-full mx-auto
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="py-2 flex justify-between">
          <Button
            onClick={() => {
              setData((data) => ({
                ...data,
                M_Slider_Images: {
                  ...data.M_Slider_Images,
                  title: translateTitle,
                },
              }));

              setOpenModal(false);
            }}
          >
            Save
          </Button>

          <Button
            color="gray"
            onClick={() => {
              setOpenModal(false);
              setData((data) => ({
                ...data,
                M_Slider_Images: {
                  title: "",
                  imgs: [],
                },
              }));
              setTranslateTitle("");
              setTranslateTitleInEN("");
              setTranslateTitleInAR("");
              setTranslateTitleInDE("");
            }}
          >
            clear and cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
