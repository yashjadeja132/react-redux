import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/actions/userActions";
import { useEffect } from "react";

const useFetchUserData = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user && !loading && !error) {
      dispatch(fetchUserData());
    }
  }, [dispatch, user, loading, error]);

  return { user, loading, error };
};

export default useFetchUserData;
