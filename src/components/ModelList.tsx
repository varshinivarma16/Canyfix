import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { BASE_URL } from "@/constant";

// interface Model {
//   model_uid: string;
//   model_name: string;
//   url: string;
// }

// interface ModelListProps {
//   brand: string;
//   onModelSelect: (modelUid: string) => void;
//   onBack: () => void;
// }

// const ModelList: React.FC<ModelListProps> = ({ brand, onModelSelect, onBack }) => {

//   const [models, setModels] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchModels = async () => {
//       try {
//         console.log("Fetching models for brand UID:", brand);
//         const response = await axios.get(
//           `https://apidev.canyfix.com/v0/mobile/${brand}/model`
//         );
//         console.log("API Response:", response.data);

//         if (
//           response.data &&
//           response.data.data &&
//           Array.isArray(response.data.data)
//         ) {
//           setModels(response.data.data);
//         } else {
//           console.error(
//             "Fetched data has an unexpected structure:",
//             response.data
//           );
//           setModels([]); // Set an empty array if data structure is unexpected
//         }
//       } catch (error) {
//         console.error("Error fetching models:", error);
//         setModels([]); // Handle error state by setting an empty array
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (brand) {
//       fetchModels();
//     } else {
//       console.error("No brand UID provided");
//     }
//   }, [brand]);

//   return (
//     <div className="flex flex-col items-center p-6 mt-6 border-2 border-[#92BEF0] rounded-xl shadow-lg  w-full max-w-[964px] mx-auto sm::w-[90%]">
//       <button onClick={onBack} className="text-blue-500 mb-6">
//         &larr; Back to Brands
//       </button>
//       <h1 className="text-xl font-semibold mb-8 text-center">
//         Select Your Phone Model
//       </h1>
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {models.length > 0 ? (
//             models.map((model) => (
//               <div
//                 key={(model as any).model_uid as string}
//                 onClick={() => onModelSelect((model as any)?.model_uid as string)}
//                 className="cursor-pointer p-4 border rounded-lg shadow hover:shadow-lg hover:scale-110 transition-all duration-500 ease-in-out"
//               >
//                 <div className="w-24 h-24 flex items-center justify-center overflow-hidden cursor-pointer">
//                   <img
//                     src={(model as any)?.url as string}
//                     alt={(model as any)?.model_name as string}
//                     className="object-contain w-full h-full"
//                   />
//                 </div>
//                 <p className="mt-4 text-center">{(model as any)?.model_name as string}</p>
//               </div>
//             ))
//           ) : (
//             <p>No models available</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ModelList;

interface Model {
  model_uid: string;
  model_name: string;
  url: string;
}

interface ModelListProps {
  brand: string;
  onModelSelect: (model: { uid: string; name: string }) => void;
  onBack: () => void;
}

const ModelList: React.FC<ModelListProps> = ({
  brand,
  onModelSelect,
  onBack,
}) => {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/mobile/${brand}/model`
        );
        if (
          response.data &&
          response.data.data &&
          Array.isArray(response.data.data)
        ) {
          setModels(response.data.data);
        } else {
          console.error(
            "Fetched data has an unexpected structure:",
            response.data
          );
          setModels([]); // Handle unexpected structure
        }
      } catch (error) {
        console.error("Error fetching models:", error);
        setModels([]); // Handle error state by setting an empty array
      } finally {
        setLoading(false);
      }
    };

    if (brand) {
      fetchModels();
    } else {
      console.error("No brand UID provided");
    }
  }, [brand]);

  return (
    <div className="flex flex-col items-center p-6 mt-6 border-2 border-[#92BEF0] rounded-xl shadow-lg  w-full max-w-[964px] mx-auto sm::w-[90%]">
      <button onClick={onBack} className="text-blue-500 mb-6">
        &larr; Back to Brands
      </button>
      <h1 className="text-xl font-semibold mb-8 text-center">
        Select Your Phone Model
      </h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {models.length > 0 ? (
            models.map((model) => (
              <div
                key={model.model_uid}
                onClick={() =>
                  onModelSelect({
                    uid: model.model_uid,
                    name: model.model_name,
                  })
                }
                className="cursor-pointer p-4 border rounded-lg shadow hover:shadow-lg hover:scale-110 transition-all duration-500 ease-in-out flex items-center flex-col"
              >
                <div className="w-24 h-24 flex items-center justify-center overflow-hidden cursor-pointer">
                  <img
                    src={model.url}
                    alt={model.model_name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="mt-4 text-center">{model.model_name}</p>
              </div>
            ))
          ) : (
            <p>No models available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ModelList;
