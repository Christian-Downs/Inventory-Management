import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";import { useState } from "react";
import { Input, FormGroup, Label, Button } from "reactstrap";
import { getPackages } from "Controller/PackageController";

function Packages() {
  const [searchTerm, setSearchTerm] = useState(""); // "a"
  const [packages, setPackages] = useState([]); // [1, 2, 3]
    const [selectedIds, setSelectedIds] = useState([]); // [1, 2, 3]
    const [isLoading, setIsLoading] = useState(true);

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
              <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: "98%", marginLeft: "1%" }}
              />
              <CardBody>
                <Table className="tablesorter ps-child" responsive>
                    <thead className="text-primary">
                        <tr>
                            <th>Select</th>
                            <th>id</th>
                            <th>Checked Out</th>
                            <th>Item Name</th>
                            <th>Item Description</th>
                            <th>Quantity</th>
                            <th>Cost</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>


                    </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Packages;