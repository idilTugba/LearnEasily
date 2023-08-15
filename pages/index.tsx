import { Result } from 'postcss';
import {useState, useEffect, useRef} from 'react';
// import language from './languages.json';


  
const commonTypeList:string[] = ['all','native','basic','elementery','advance','american','british','avusturya','ielts'];

export default function Home() {
  
  const [translateValues, setTranslateValues] = useState<translateValues>({
    text: '',
    language: 'eng',
    type: 'all'
  });

  let translateResultsList:Array<object> = new Array();

  
  // if need any other language to translate
  //  const [typeList, setTypeList] = useState<string[]>([...commonTypeList]);
  // const handleLanguageChange = (e:any) => {
  //   const selectedLanguage:string = e.target.value;
  //   const selectedTypeList:string[] | undefined | null = language.find(lang => lang.name === selectedLanguage)?.type;
  //   setTypeList([...commonTypeList])
    
  //   selectedTypeList && (setTypeList([...commonTypeList,...selectedTypeList]));
  //   setTranslateValues({...translateValues, language: selectedLanguage} )
  // }

  const isDisabled = Object.values(translateValues).some(item => (!item || item == ' ' || item == '\n'));
  let translateResult:string = '';

  const handleFormSubmit = async (e) =>{
    e.preventDefault();
    
    const response = await fetch('http://localhost:3001/translate-it', {
      method: 'post',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(translateValues)
    });

    const res = await response.json();
    translateResult = res.content;    
  }
  
  return (
    <div
      className="container flex gap-2 flex-col h-full justify-between m-auto mt-3">
        {/* <pre>{JSON.stringify(translateValues, true, 2)}</pre> */}
       
        <div>
          <button
            className="text-white bg-lime-300 hover:bg-lime-400 text-center w-full h-10 disabled:bg-gray-300 disabled:pointer-event-none"
            disabled={isDisabled}
            onClick={e=>handleFormSubmit(e)}>
              Translate it
          </button>
        </div>

        <div>
        
        </div>
    </div>
  )
}



// let [a,b,c] = [50,60,70];
// let msg = test || 'text me!';
// const isFalsy = (val) => !val
// 10<5 ? true : (10>100 ? true : false)
// let use = null || '' || 'fe'; console.log(use); //fe
// let use = null ?? '' ?? 'fe'; console.log(use); //empty string


    //seperated all types to result
  //   if(/\n/.test(translateResult)){
  //     const results = translateResult.split('\n').map(line => {
  //       const parts = line.split(':');
  //       if (parts.length === 2) {
  //         const hashtag = parts[0].trim();
  //         const content = parts[1].trim();
  //         return { hashtag, content };
  //       }
  //       return null;
  //     }).filter(result => result !== null);
  
  //     translateResultsList = new Array(results);
  //     console.log(translateResultsList);
  // }

  // const nextItem = {
  //   id: crypto.randomUUID(),
  //   label: value,
  // };