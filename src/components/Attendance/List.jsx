import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
export default function List() {
  const [listKaryawan, setKaryawan] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://uts-if-3-b-2327250041-api.vercel.app/api/api/attendance")
      .then((response) => {
        setKaryawan(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  return (
    <>
        <NavLink to="/attendance/create" className="btn btn-primary my-4 mx-2">Tambah Kehadiran</NavLink>
       <table className="table table-striped">
         <thead>
             <tr>
                 <th scope="col">Nama Karyawan</th>
                 <th scope="col">Presensi</th>
             </tr>
         </thead>
         <tbody>
         {listKaryawan.map((kar) => (
                 <tr key={kar.id}>
                     <td>{kar.nama}</td>
                     <td>Hadir</td>
                     
                 </tr>
             ))}
             
         </tbody>

         </table>
    </>
  );
}
