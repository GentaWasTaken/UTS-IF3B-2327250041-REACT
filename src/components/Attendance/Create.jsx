import { useEffect, useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";
export default function Create() {
    const [KaryawanNama, setNamaKaryawan] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
    
        if (KaryawanNama.trim() === "") {
          setError("Nama Prodi and Fakultas are required");
          return;
        }
    
        try {
          const response = await axios.post(
            "https://uts-if-3-b-2327250041-api.vercel.app/api/api/attendance",
            {
              nama: KaryawanNama,
            },
          );
          if (response.status === 201) {
            Swal.fire({
                text: `${response.data.message}`,
              });
            setNamaKaryawan("");
            
          } else {
            Swal.fire({
                text: `${response.data.message}`,
              });
          }
        } catch (error) {
          setError("An error occurred while creating prodi");
        }
      };


      return (
        <>
        <form onSubmit={handleSubmit}>
        <div className="mb-3 my-5">
          <input
            type="text"
            className="form-control"
            value={KaryawanNama}
            onChange={(e) => setNamaKaryawan(e.target.value)}
            placeholder="Masukan nama karyawan"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
        </form>
        </>
      );
}