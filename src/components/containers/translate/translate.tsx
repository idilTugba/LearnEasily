"use client";
import {useRequest} from "@/context/requestContext"


const Translate = () => {
    const { requestData, setRequestData} = useRequest();
    const commonTypeList:string[] = ['all','native','basic','elementery','advance','american','british','avusturya','ielts'];

    return(
        <section
            className="flex flex-row items-center justify-between gap-2 w-full">
                <select 
                    disabled
                    name="LanguageOfUser" 
                    className='w-full border-2 bg-gray-100 py-2'>
                    <option value="Tr">Türkçe</option>
                </select>
                
                <select 
                    disabled
                    name="LanguageOfTranslate" 
                    className='w-full border-2 bg-gray-100 py-2'>
                    <option value="Eng">İngilizce</option>
                </select>

                <select
                    name="typeOftranslate"
                    className='w-full border-2 py-2'
                    data-cy="typeOfTranslate"
                    onChange={(e) => setRequestData({...requestData, translateType: e.target.value})}>
                    {commonTypeList.map(type => {
                        return <option value={type} key={type}>{type}</option>
                    })}
                </select>
        </section>
    )
}

export default Translate;