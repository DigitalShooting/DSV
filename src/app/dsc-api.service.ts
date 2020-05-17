import { Injectable } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ReplaySubject } from "rxjs";

import * as io from 'socket.io-client';

import { DsvApiService } from "./dsv-api.service";
import { OnlineLinesLine } from "./classes/session";
import { Session, Config, DisciplinePart } from "./views/dsc/classes/session";
import { DscAPIInterface } from "./views/dsc/api";


import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DscApiService {

  private socket: io;

  // TODO
  private auth = {
    // key: environment.apiKey,
    key: "123",
  };
  
  private line: OnlineLinesLine
  setDetail(line: OnlineLinesLine) {
    this.line = line;
    this._connected.next(true);
    this._session.next(line.cache.setData);
    this._config.next(line.cache.setConfig);
  }
  closeDetail() {
    this.line = null;
    this._connected.next(false);
    this._session.next(null);
    this._config.next(null);
  }

  // websocket connection status to dsc server
  private _connected: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  get connected() {
    return this._connected.asObservable();
  }

  // current dsc session, or null if not connected
  private currentSession: Session;
  private _session: ReplaySubject<Session> = new ReplaySubject<Session>();
  get session() {
    return this._session.asObservable();
  }
  
  private _config: ReplaySubject<Config> = new ReplaySubject<Config>();
  get config() {
    return this._config.asObservable();
  }

  constructor(private route: ActivatedRoute, private dsvAPI: DsvApiService) {
    this.route.queryParamMap.subscribe(params => {
      this.auth.key = params.get("key");
    })
    dsvAPI.data.subscribe(onlineLines => {
      if (onlineLines != null && this.line != null) {
        let newLine = onlineLines.lines[this.line.id];
        if (newLine != null) {
          this.line = newLine;
          this._session.next(this.line.cache.setData);
          this._config.next(this.line.cache.setConfig);
        }
      }
    });
  }



  

  setNewTarget() {
    this.dsvAPI.sendToLine(this.line.id, "newTarget", {
      auth: this.auth,
    })
  }
  setPart(partId, forceNewPart) {
    this.dsvAPI.sendToLine(this.line.id, "setPart", {
      auth: this.auth,
      partId: partId,
    });
  }
  togglePart() {
    const session = this.line.cache.setData;
    if (session == null) return;
    const partsOrder = session.disziplin.partsOrder;
    const activePart = session.sessionParts[session.sessionIndex];
    const currentIndex = partsOrder.indexOf(activePart.type)
    
    // Jump to the first disciplin part if we are at the end
    if (currentIndex + 1 >= partsOrder.length) {
      this.setPart(partsOrder[0], false);
    }
    // Jump to the nex disciplin part
    else {
      this.setPart(partsOrder[currentIndex+1], false);
    }
  }
  setSessionIndex(sessionIndex) {
    this.dsvAPI.sendToLine(this.line.id, "setSessionIndex", {
    	auth: this.auth,
    	sessionIndex: sessionIndex,
    });
  }
  setUser(user){
    this.dsvAPI.sendToLine(this.line.id, "setUser", {
    	auth: this.auth,
    	user: user,
    });
  }
  setDisciplin(disziplin) {
    this.dsvAPI.sendToLine(this.line.id, "setDisziplin", {
      auth: this.auth,
      disziplin: disziplin,
    });
  }
  print() {
    // default Normal
    // dateless Ohne Datum
    // bigImage Größere Scheibe
    this.dsvAPI.sendToLine(this.line.id, "print", {
      auth: this.auth,
      printTemplate: "default",
    });
  }
  // loadData(data) {
  //   this.dsvAPI.sendToLine(this.line.id, "loadData", {
  //   	auth: this.auth,
  //   	data: data,
  //   });
  // }
  // getTempToken() {
  //   // this.socket.emit("getTempToken", {
  //   // 	auth: this.auth,
  //   // });
  // }




}
