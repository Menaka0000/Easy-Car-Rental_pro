import {createContext,useState} from "react";

const ImgLibraryContext = createContext();

export function ImgLibraryProvider({children}) {
    const [imgLibrary, setImgLibrary] = useState([]);
    const addImgSet = (imgFile) => {
        setImgLibrary(prevState => [...prevState, {file:imgFile}])
    }
    return (
        <ImgLibraryContext.Provider value={{imgLibrary,addImgSet}}>{children}</ImgLibraryContext.Provider>
    );
}
export default ImgLibraryContext;
