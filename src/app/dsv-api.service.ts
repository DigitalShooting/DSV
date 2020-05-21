import { Injectable } from '@angular/core';

import { ReplaySubject } from "rxjs";

// import ReconnectingWebSocket from "../../node_modules/reconnectingwebsocket/reconnecting-websocket.min.js";
import * as io from 'socket.io-client';

import { OnlineLinesUpdate, OnlineLines } from "./classes/session";

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
  private _data: ReplaySubject<OnlineLinesUpdate> = new ReplaySubject<OnlineLinesUpdate>();
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
      this._data.next(new OnlineLinesUpdate(onlineLines, null));
      console.log('onlineLines', onlineLines);
    });
    
    this.socket.on('setConfig', (config) => {
      // console.log('setConfig', config);
      if (this._onlineLines && this._onlineLines.lines[config.line]) {
        this._onlineLines.lines[config.line].cache.setConfig = config.data;
        this._data.next(new OnlineLinesUpdate(this._onlineLines, config.line));
      }
    });
    
    
    
    this.socket.on('setData', (data) => {
      // console.log('setData', data);
      if (this._onlineLines && this._onlineLines.lines[data.line]) {
        this._onlineLines.lines[data.line].cache.setData = data.data;
        this._data.next(new OnlineLinesUpdate(this._onlineLines, data.line));
      }
    });
    
    this.socket.on('setTeam', (data) => {
      // console.log('setTeam', data.team);
      this._onlineLines.teams[data.team.teamID] = data.team;
      this._data.next(new OnlineLinesUpdate(this._onlineLines, data.line));
    });
    
  }
}
