import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  
  Row,
  Col,
} from "reactstrap";import { useState } from "react";
import { Button } from "reactstrap";
import { getPackages } from "Controller/PackageController";
import PackageTable from "components/Tables/PackageTable";
import { checkOutPackages } from "Controller/PackageController";
import { checkInPackages } from "Controller/PackageController";
import { deletePackagesById } from "Controller/PackageController";

function Packages() {
  // const [searchTerm, setSearchTerm] = useState(""); // "a"
  const [packages, setPackages] = useState([]); // [1, 2, 3]
    const [selectedIds, setSelectedIds] = useState([]); // [1, 2, 3]
    const [isLoading, setIsLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [refreshInventory, setRefreshInventory] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    useEffect(() => {
        const fetchItems = async () => {
            getPackages().then((packages1) => {
                setPackages(packages1);
                console.log(packages1.image);
                setIsLoading(false);
            });
        };
        fetchItems();
    }, [])


    const checkOut = () => {
        if(selectedIds.length !== 0){
            console.log("Sending selected ids to checkout: " + selectedIds)
            checkOutPackages(selectedIds);
            setRefreshInventory(true);
            clearedSelectedIds()
        }
    }
    const clearedSelectedIds = () => {
        setSelectedIds([]);
    };


    const checkIn = () => {
        if (selectedIds.length !== 0) {
          console.log("Sending selected ids to checkin: " + selectedIds);
          checkInPackages(selectedIds);
          setRefreshInventory(true);
          clearedSelectedIds();
        }
    }

    const deleteItems = () => {
        if(selectedIds.length !== 0){
            for (var i = 0; i < selectedIds.length; i++) {
                console.log("Sending selected ids to delete: " + selectedIds[i]);
                deletePackagesById(selectedIds[i]);
            }
            clearedSelectedIds();
            setRefreshInventory(true);
            

        }
    }

    const addTestItem = () => {

    }


    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Packages</CardTitle>
              </CardHeader>
              <CardBody>
                <PackageTable
                  selectedIds={selectedIds}
                  setSelectedIds={setSelectedIds}
                  refreshInventory={refreshInventory}
                  setRefreshInventory={setRefreshInventory}
                />
                <Button color="primary" onClick={toggle}>
                  {" "}
                  Add Item{" "}
                </Button>
                <Button color="info" onClick={checkOut}>
                  {" "}
                  Check Out Items
                </Button>
                <Button color="info" onClick={checkIn}>
                  {" "}
                  Check In Items
                </Button>
                <Button color="danger" onClick={deleteItems}>
                  {" "}
                  Delete Items
                </Button>
                <Button color="warning" onClick={addTestItem}>
                  {" "}
                  Add Test Item
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Packages;