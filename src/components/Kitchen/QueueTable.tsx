"use client";

import { useGetTableQueue } from "@/services/queries";
import ChoiceTable from "./ChoiceTable";
import { TableTypes } from "@/types/table";
import { useDeclineTableQueue, useApproveTableQueue } from "@/services/queries";
import KitchenLoader from "../common/KitchenLoader";
import { useWebSocketContext } from "@/providers/WebSocketProvider";
import { useTableQueueStore } from "@/store/kitchenQueue-store";
import { useEffect } from "react";

const QueueTable = () => {
  /* const queryResult = useGetTableQueue(); */
  const socketEvents = useWebSocketContext();
  const { queue: queryResult, serverRetrieved } = useTableQueueStore();
  const mutateRight = useApproveTableQueue();
  const mutateLeft = useDeclineTableQueue();

  useEffect(() => {
    socketEvents?.getTableQueues();
  }, [socketEvents]);

  function getSession(data: TableTypes) {
    return data.session;
  }

  function getStatus(data: TableTypes) {
    return data.status;
  }

  if (!serverRetrieved)
    return (
      <div className="mt-52 flex items-center justify-center md:m-64">
        <KitchenLoader />
      </div>
    );

  return (
    <ChoiceTable
      data={queryResult as TableTypes[]}
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
      leftEmptyText="No table queues."
      rightEmptyText="No approved table queues."
    />
  );
};

export default QueueTable;
