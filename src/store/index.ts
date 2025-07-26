import { defineStore, acceptHMRUpdate } from "pinia";
import { isEmpty, delItemByIndex, getItemByKey } from "@/utils"

interface appInterface {
  isAuthenticated: boolean;
  user: {
    name:string;
    username:string;
    email:string;
    password:string; 
  },
  todo: {
    id: number;
    item: string;
    done: boolean; 
  },
  notification: {
    active: boolean;
    typ: string;
    msg: string; 
  },
  users: appInterface["user"][];
  todos: appInterface["todo"][];
  notifications: appInterface["notification"][];
}

// Store
export const store = defineStore("main", {

  state: (): appInterface => ({
    isAuthenticated: false as boolean,
    user: {
      name: "" as string,
      username: "" as string,
      email: "" as string,
      password: "" as string,
    },
    users: [] as appInterface["users"],
    todo: {
      id: 0 as number,
      item: "" as string,
      done: false as boolean, 
    },
    todos: [] as appInterface["todos"],
    notification: {
      active: false as boolean,
      typ: "" as string,
      msg: "" as string, 
    },
    notifications: [] as appInterface["notifications"],
  }),

  actions: { 

/* ====================================================== todo states ============================= */
  addTodo(item: string)
  {
    const id = Date.now() + Math.random();
    let todo:appInterface["todo"] = { id, item, done: false};
    this.todos = [...this.todos, todo];
  },

  delTodo(i: number) 
  {
    this.todos = delItemByIndex(i, this.todos);
  },

  clearTodos() {
    this.todos = [];
  },

/* ====================================================== user states ============================= */
    doLogin(data:appInterface["user"])
    {
      if(isEmpty(data?.username) || isEmpty(data.password)) return false;
      // hardcoded default user
      if(data?.username == "tester" && data?.password == "p@ssword") {
        this.user = {
          name: "QA tester",
          email: "qatester@yopmail.com",
          username: "tester",
          password: "p@ssword"
        }
        this.isAuthenticated = true;
        return true;
      }

      this.user = getItemByKey("username", data?.username, this.users);
      if(isEmpty(this.user) || (data?.password != this.user?.password)) return false;
      if(data?.password == this.user?.password) {
        this.isAuthenticated = true;
        return true;
      }
    },

    doLogout() {
      this.user = {
        name: "",
        username: "",
        email: "",
        password: ""
      }
      this.isAuthenticated = false;
      navigateTo({ path: '/auth/login' }); // else if its not
    },

/* ====================================================== notification states ============================= */
  showNotification(payload:appInterface["notification"]) {  
    payload = {...payload, active: true}
    console.log(payload)
    this.notification = payload;
    // Set up countdown timer
    setTimeout(() => this.notification = { active: false, typ: "", msg: "" }, 7000); 
  },

    delNotification (i:number) { 
        this.notifications = delItemByIndex(i, this.notifications); // removes 'banana'
    },

    clearNotifications() {
      this.notifications = [];
    }

  },

  getters: {
    getStore: (state): appInterface => state
  },

  // persit state using `pinia-plugin-persistedstate`
  persist: true
});

// HMR
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(store, import.meta.hot));
}
