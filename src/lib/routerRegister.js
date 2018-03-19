import fs from 'fs';
import path from 'path';
import express from 'express';

export default async (app, routeDir) => {
    let files = createRoutePath(routeDir).filter(routerPath => /\.router.js$/.test(routerPath));

    // await로 기다리게 되면 라우터 등록 시간이 하나당 1초라고 가정시 라우터갯수 * 1초가 걸린다.
    // Promise.all로 해결시 라우터 등록시 함께 등록되기 시작하고 모두다 끝나면 알려주기 때문에
    // 속도는 1초정도 걸린다.

    await Promise.all(files.map(dynamicRouterRegister));

    // function sleep(){ speed test
    //     return new Promise((res, rej)=>{
    //         setTimeout(function(){
    //             res();
    //         },3000)
    //     })   
    // }
    async function dynamicRouterRegister(name){
        // console.log('reg')  speed test
        // await sleep(); speed test
        const router = await import(path.join(routeDir, name));

        app.use(fileNameToPath(name), router.default(express.Router()));
        //console.log('reg end') speed test
        function fileNameToPath(fileName){
            return '/' + fileName.replace('.router.js', '')
                                .replace('index', '')
                                .replace('all', '*')
                                .replace('.', '/');
        }
    }

    function createRoutePath(routeDir, folderName = '', arr = []){
        let ls = fs.readdirSync(routeDir);
    
        return ls.reduce((list, name) => {
            fs.lstatSync(path.join(routeDir, name)).isDirectory() ?
            createRoutePath(path.join(routeDir, name), name, list) : 
            list.push(`${folderName ? folderName + '/' : ''}${name}`);
            return list;
        }, arr);
        
        return dirList;
    }
}