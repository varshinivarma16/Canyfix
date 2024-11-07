'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import { BASE_URL } from "@/constant";

interface Brand {
  brand_uid: string;
  brand_name: string;
  url: string;
}

interface BrandListProps {
  onSelectBrand: (brand: { uid: string; name: string }) => void;
}

const BrandList: React.FC<BrandListProps> = ({ onSelectBrand }) => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/mobile/brand`);
        if (response.data && response.data.data && Array.isArray(response.data.data)) {
          setBrands(response.data.data);
        } else {
          console.error('Fetched data has an unexpected structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching brands:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 mt-6 border-2 border-[#92BEF0] rounded-xl shadow-lg  w-[80%] max-w-[964px] mx-auto sm:w-[90%]">
      <h1 className="text-xl font-semibold mb-8 text-center">Select Your Phone Brand</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-9">
  {brands.length > 0 ? (
    brands.map((brand) => (
      <div
        key={brand.brand_uid}
        onClick={() => onSelectBrand({ uid: brand.brand_uid, name: brand.brand_name })}
        className="cursor-pointer p-6 border rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500 ease-in-out"
      >
        
        <img
          src={brand.url || "/path/to/your/fallback-image.svg"} 
          alt={brand.brand_name}
          className="w-20 h-20 mx-auto object-contain" 
        />
        <p className="mt-4 text-center text-lg">{brand.brand_name}</p>
      </div>
    ))
  ) : (
    <p>No brands available</p>
  )}
</div>

      )}
    </div>
  );
};

export default BrandList;


