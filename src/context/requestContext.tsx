"use client";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface IRequestData {
    text: string,
    languageOfUser: string,
    languageOfTranslate: string,
    translateType: string
}

interface RequestContextProps {
    children: React.ReactNode;
}

const RequestContextDefault = {
    requestData: { 
        text: '',
        languageOfUser : 'tr',
        languageOfTranslate: 'eng',
        translateType: 'all' 
    },
    setRequestData: (state: IRequestData) => {}
};

const RequestContext = createContext<typeof RequestContextDefault>(RequestContextDefault);

const RequestProvider: React.FunctionComponent<RequestContextProps> = ({children}) => {
    const [requestData, setRequestData] = useState<IRequestData>({
        text: '',
        languageOfUser : 'tr',
        languageOfTranslate: 'eng',
        translateType: 'all'
    });

    const values = {
        requestData,
        setRequestData
    }

    return(
        <RequestContext.Provider value={values}> {children}</RequestContext.Provider>
    )
}

const useRequest = () => useContext(RequestContext);

export {RequestProvider, useRequest, IRequestData}