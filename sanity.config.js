import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId:"v2sl67eu",
    dataset:"production",
    plugins:[deskTool()],
    apiVersion:1,
    basePath:"/admin",
    useCdn:true,
    schema:{types:schemas}
})


export default config;  