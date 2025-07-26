import axios from "axios";
import { useEffect, useState } from "react";

const URL = "http://localhost:3000/";
export const useGetSiswa = () => {
  const [siswa, setSiswa] = useState([]);

  const getDataSiswa = async () => {
    try {
      const result = await axios.get(`${URL}`);
      setSiswa(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
  };

  useEffect(() => {
    getDataSiswa();
  }, []);

  return {
    data: siswa,
  };
};

export const deleteSiswa = async (id) => {
  const result = await axios.delete(`${URL}${id}`);
  return result;
};

export const useGetSiswaById = (id) => {
  const [siswa, setSiswa] = useState([]);

  useEffect(() => {
    const getDataById = async () => {
      try {
        const result = await axios.get(`http://localhost:3000/${id}`);
        setSiswa([result.data]);
      } catch (err) {
        console.log(err);
      }
    };

    getDataById();
  }, [id]);

  return {
    data: siswa,
  };
};
