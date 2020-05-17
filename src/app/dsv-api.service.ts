import { Injectable } from '@angular/core';

import { ReplaySubject } from "rxjs";

// import ReconnectingWebSocket from "../../node_modules/reconnectingwebsocket/reconnecting-websocket.min.js";
import * as io from 'socket.io-client';

import { OnlineLines } from "./classes/session";

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DsvApiService {
  
  private socket: io;
  
  // websocket connection status to dsc server
  private _connected: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  get connected() {
    return this._connected.asObservable();
  }
  
  // current dsc session, or null if not connected
  private _onlineLines;
  private _data: ReplaySubject<OnlineLines> = new ReplaySubject<OnlineLines>();
  get data() {
    return this._data.asObservable();
  }
  
  
  sendToLine(lineID: string, method: string, data: any) {
    this.socket.emit("setLine", {
      method: method,
      line: lineID,
      data: data,
    });
  }

  constructor() {
    this.socket = io(environment.serverURL(location));
    
    this.socket.on('connect', () => {
      console.log('on connect');
      this._connected.next(true);
    });
    
    this.socket.on('disconnect', () => {
      console.log('on disconnect');
      this._connected.next(false);
      this._data.next(null);
      this._onlineLines = null;
    });


    this.socket.on('onlineLines', (onlineLines) => {
      this._onlineLines = onlineLines;
      this._data.next(onlineLines);
      console.log('onlineLines', onlineLines);
    });
    
    this.socket.on('setConfig', (config) => {
      // console.log('setConfig', config);
      if (this._onlineLines && this._onlineLines.lines[config.line]) {
        this._onlineLines.lines[config.line].cache.setConfig = config.data;
        this._data.next(this._onlineLines);
      }
    });
    
    
    
    this.socket.on('setData', (data) => {
      // console.log('setData', data);
      if (this._onlineLines && this._onlineLines.lines[data.line]) {
        this._onlineLines.lines[data.line].cache.setData = data.data;
        this._data.next(this._onlineLines);
      }
    });
    
    this.socket.on('setTeam', (data) => {
      // console.log('setTeam', data.team);
      this._onlineLines.teams[data.team.teamID] = data.team;
      this._data.next(this._onlineLines);
    });
    
    
		// this.socket.onmessage = (event) => {
    //   console.log("onEvent", event);
    // 
		// 	try {
		// 		let message = JSON.parse(event.data);
    //     console.log(message);
		// 		if (message.type == "full") {
    //       this._lines = message.data.lines;
    //       console.log("aaa", message.data.lines)
		// 		}
    //     else if (message.type == "delta") {
    //       if (this._lines[message.data.line] != null) {
    //         this._lines[message.data.line].cache.setData = message.data.data;
		// 		  }
    //       else {
    //         // TODO request full
    //       }
    //     }
    //     else if (message.type == "disconnect") {
    //       delete this._lines[message.data.lineID]
		// 		}
    //     this._data.next(this._lines);
		// 	}
		// 	catch (err) {
		// 		console.error(err)
		// 	}
		// }
    
  }
}
