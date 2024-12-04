import { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { SelectBar } from "../../components/SelectBar";
import { getListFloodInformationService } from "../../services/flood-information.service";
import { EInformationStatus } from "../../utils/enum";
import { Size } from "../../utils/size";
import { IFloodInformation } from "../../utils/types";
import FloodInformationTable from "./components/Table";
import FloodInformationDetail from "./components/FloodInformationDetail";

const FloodInformation = () => {
  const data = [
    { value: EInformationStatus.ALL, label: "All" },
    { value: EInformationStatus.APPROVED, label: "Approved" },
    { value: EInformationStatus.PENDING, label: "Pending" },
    { value: EInformationStatus.DECLINED, label: "Declined" },
  ];
  const [filter, setFilter] = useState<EInformationStatus>(
    EInformationStatus.ALL
  );
  const [search, setSearch] = useState("");

  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [list, setList] = useState<IFloodInformation[]>([]);

  const getFloodInformationList = async () => {
    try {
      const floodInformationList = await getListFloodInformationService({
        status: filter,
        search: search,
      });
      setList(floodInformationList);
      return data;
    } catch (error) {
      console.error("Error fetching flood information list:", error);
      return [];
    }
  };

  useEffect(() => {
    getFloodInformationList();
  }, [filter, search, isOpenModal]);

  const onSearchChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(e.target.value);
  };

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        gap: "2vh",
        flexDirection: "column",
        display: "flex",
        height: "100%",
      }}
    >
      <div style={{ fontSize: Size.L }}>Flood Information List</div>
      <div>
        The list flood information from users need to review within 15 minutes
        since users submit their information!{" "}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div style={{ flexDirection: "row", gap: 10, display: "flex" }}>
          <SearchBar onSearchChange={onSearchChange} />
          <SelectBar<EInformationStatus>
            options={data}
            defaultValue={EInformationStatus.ALL}
            setSelectedValue={setFilter}
          />
        </div>
        {/* <ConfirmActionModal
          title={buttonTitle}
          setIsModalOpen={setIsOpenModal}
          isModalOpen={isOpenModal}
          handleOk={handleOk}
          isDisabled={isDisabled}
        /> */}
      </div>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <FloodInformationTable
          status={filter}
          setSelectedList={setSelectedList}
          list={list}
          handleActionClick={() => {}}
        />
      </div>
    </div>
  );
};

export default FloodInformation;
