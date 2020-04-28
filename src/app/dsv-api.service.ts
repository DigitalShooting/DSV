import { Injectable } from '@angular/core';

import { ReplaySubject } from "rxjs";

import ReconnectingWebSocket from "../../node_modules/reconnectingwebsocket/reconnecting-websocket.min.js";
// import * as io from 'socket.io-client';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DsvApiService {
  
  private socket: ReconnectingWebSocket;
  
  // websocket connection status to dsc server
  private _connected: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  get connected() {
    return this._connected.asObservable();
  }
  
  // current dsc session, or null if not connected
  private _lines;
  private _data: ReplaySubject<any> = new ReplaySubject<any>();
  get data() {
    return this._data.asObservable();
  }

  constructor() {
    this.socket = new ReconnectingWebSocket(environment.serverURL);
    // this.socket = io(environment.serverURL)
    // this.socket = io("https://127.0.0.1:4000/socket.io")
    
    // this.socket.on("setData", (message) => {
    //   console.log(message)
    // });

    this.socket.onopen = () => this._connected.next(true);
    this.socket.onclose = () => {
      this._connected.next(false);
      this._data.next(null);
    };
		this.socket.onmessage = (event) => {
      console.log("onEvent", event);
      
			try {
				let message = JSON.parse(event.data);
        console.log(message);
				if (message.type == "full") {
          this._lines = message.data.lines;
          console.log("aaa", message.data.lines)
				}
        else if (message.type == "delta") {
          this._lines[message.data.line].cache.setData = message.data.data;
				}
        else if (message.type == "disconnect") {
          delete this._lines[message.data.lineID]
				}
        this._data.next(this._lines);
			}
			catch (err) {
				console.error(err)
			}
		}
    
  }
}
