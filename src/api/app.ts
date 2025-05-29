export type AppItem = {
   key: string;
   path: string;
};

export type App = {
   name: string;
   config: AppItem[];
   data: AppItem[];
};