"use client";

import TableLayout from "./TableLayout";
import { UseMutationResult } from "@tanstack/react-query";
import { AssistanceRequest } from "@/types/assistance";
import { TableTypes } from "@/types/table";
import { Loader } from "lucide-react";

interface ChoiceTableProps {
  data: AssistanceRequest[] | TableTypes[] | Error;
  getSession: (data: any["data"]) => string;
  getStatus: (data: any["data"]) => boolean;
  leftStatus: boolean;
  leftHeader: string;
  rightHeader: string;
  leftEmptyText: string;
  rightEmptyText: string;
  leftChoice: string;
  rightChoice: string;
  finalChoice: string;
  mutateLeft: UseMutationResult<void, Error, string, unknown>;
  mutateRight: UseMutationResult<void, Error, string, unknown>;
}

const ChoiceTable = ({
  data,
  getSession,
  getStatus,
  leftStatus,
  leftHeader,
  rightHeader,
  leftEmptyText,
  rightEmptyText,
  leftChoice,
  rightChoice,
  finalChoice,
  mutateLeft,
  mutateRight,
}: ChoiceTableProps) => {
  if (!data) return <Loader />;

  const [leftList, rightList] = (
    data as TableTypes[] | AssistanceRequest[]
  )?.reduce(
    ([left, right]: Array<any[]>, item) => {
      getStatus(item) === leftStatus ? left.push(item) : right.push(item);
      return [left, right];
    },
    [[], []],
  ) as Array<any[]>;

  return (
    <main className="grid min-h-screen grid-cols-2 gap-4">
      <TableLayout
        data={leftList}
        emptyText={leftEmptyText}
        getSession={getSession}
        getStatus={getStatus}
        leftStatus={leftStatus}
        headerText={leftHeader}
        leftChoice={leftChoice}
        rightChoice={rightChoice}
        finalChoice={finalChoice}
        mutateLeft={mutateLeft}
        mutateRight={mutateRight}
      />
      <TableLayout
        data={rightList}
        emptyText={rightEmptyText}
        getSession={getSession}
        getStatus={getStatus}
        leftStatus={leftStatus}
        headerText={rightHeader}
        leftChoice={leftChoice}
        rightChoice={rightChoice}
        finalChoice={finalChoice}
        mutateLeft={mutateLeft}
        mutateRight={mutateRight}
      />
    </main>
  );
};

export default ChoiceTable;
