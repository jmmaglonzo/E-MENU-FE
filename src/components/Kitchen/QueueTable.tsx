"use client";

import { useGetTableQueue } from "@/services/queries";
import ChoiceTable from "./ChoiceTable";
import { TableTypes } from "@/types/table";
import { useDeclineTableQueue, useApproveTableQueue } from "@/services/queries";

const QueueTable = () => {
  const queryResult = useGetTableQueue();
  const mutateRight = useApproveTableQueue();
  const mutateLeft =  useDeclineTableQueue();
  
  function getSession(data: TableTypes) {
    return data.session;
  }

  function getStatus(data: TableTypes) {
    return data.status;
  }

  if (queryResult.isPending) return <div>Loading</div>

  return (
    <ChoiceTable 
      data={queryResult.data as TableTypes[]}
      getSession={getSession}
      getStatus={getStatus}
      leftStatus={false}
      leftHeader="Pending"
      rightHeader="Approved"
      leftChoice="Decline"
      rightChoice="Approve"
      finalChoice="Complete"
      mutateRight={mutateRight}
      mutateLeft={mutateLeft}
      emptyText="No table queues."
    />
  );
};

export default QueueTable;
