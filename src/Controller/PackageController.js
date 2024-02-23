import axios from "axios";
import { Package } from "Classes/Package.ts";

export async function getPackages() {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  var packages = [];
  const response = await axios.get(`${serverUrl}/api/package`);
  packages = response.data;
  console.log(packages);
  packages = packages.map(
    (package1) =>
      new Package(
        package1.ID,
        package1.Name,
        package1.Description,
        package1.Price,
        package1.Image,
        // package1.checked_out
      )
  );
  console.log(packages);
  return packages;
}

export async function createPackage(newPackage) {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const response = await axios.post(`${serverUrl}/api/package`, newPackage);
  return response.data;
}

export async function updatePackage(package1) {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const response = await axios.put(
    `${serverUrl}/api/package/${package1.id}`,
    package1
  );
  return response.data;
}

export async function checkOutPackage(package1) {
  console.log("Checking out: " + package1.id);
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const response = await axios.put(
    `${serverUrl}/api/package/check-out/${package1.id}`
  );
  return response.data;
}

export async function checkInPackage(package1) {
  console.log("Checking in: " + package1.id);
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const response = await axios.put(
    `${serverUrl}/api/package/check-in/${package1.id}`
  );
  return response.data;
}

export async function checkOutPackages(ids) {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const response = await axios.put(
    `${serverUrl}/api/package/check-out-package`,
    { ids: ids }
  );
  return response.data;
}

export async function checkInPackages(ids) {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const response = await axios.put(
    `${serverUrl}/api/package/check-in-package`,
    { ids: ids }
  );
  return response.data;
}

export async function getPackageById(id) {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const response = await axios.get(`${serverUrl}/api/package/${id}`);
  return response.data;
}

export async function deletePackagesById(id) {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const response = await axios.delete(`${serverUrl}/api/package/${id}`);
  return response.data;
}



