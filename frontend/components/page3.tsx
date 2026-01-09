export default function Page3(){
    return(
              <div>
        <div>
          <search></search>
        </div>
        <div className="flex justify-between mt-8">
          <h2 className="text-2xl font-bold ml-4">Онцлох Дадлагын Зарууд:</h2>
          <button className="bg-blue-800 px-1 text-white mr-4 rounded-lg">Бүгдийг харах</button>
        </div>
        <div className="flex justify-between mt-8">
          <h2 className="text-2xl font-bold ml-4">Сүүлийн Дадлагын Зарууд</h2>
          <button className="bg-blue-800 px-1 text-white mr-4 rounded-lg">Бүгдийг харах</button>
        </div>
      </div>
    )
}