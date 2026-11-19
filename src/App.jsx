import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeresTypes } from "./redux/slices/deresSlice";

const App = () => {
  const dispatch = useDispatch();
  const { items, favorites, status } = useSelector((state) => state.deres);

  useEffect(() => {
    dispatch(fetchDeresTypes());
  }, [dispatch]);

  console.log(items);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="font-bold text-3xl mb-2">Типи Дере:</h1>
      <p>Обрано: {favorites.length}</p>

      {status === "loading" && <p>Завантаження...</p>}
      {status === "error" && <p>Помилка завантаження</p>}
      {status === "success" && <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">Успішно</div>}
    </div>
  );
};

export default App;
