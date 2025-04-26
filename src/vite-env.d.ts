//  <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    // 他にも追加したい環境変数あればここに書く
  }
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
  }