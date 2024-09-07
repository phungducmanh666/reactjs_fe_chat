import React, { useEffect, useState } from "react";

export default function useQuery(asyncCallBack, loadNow) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const query = () => {
    if (asyncCallBack === null) return;
    setLoading(true);
    asyncCallBack()
      .then((res) => {
        setLoading(false);
        setResponse(res);
      })
      .catch((err) => {
        setLoading(false);
        setResponse(err);
      });
  };

  const query2 = (asyncCallBack2) => {
    setLoading(true);
    asyncCallBack2()
      .then((res) => {
        setLoading(false);
        setResponse(res);
      })
      .catch((err) => {
        setLoading(false);
        setResponse(err);
      });
  };

  useEffect(() => {
    if (loadNow === true) {
      query();
    }
  }, [loadNow]);

  return [loading, response, query, query2];
}
