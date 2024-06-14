import { Document } from 'mongoose';


export interface Submit {
    _id: string;
    codesamples: string;
    staticAnalysis?: string;
    complexityAnalysis?: string;
    languages: string;
    levels: string;
    types: string;
    issuedescriptions: string;
    tags: string[];
    sampletitles?: string;
    numberReply?: number;
    discussion?: string[];
    generalreply?: { replystring: string; username: string; userimage: string }[];
    creator: string;
    createdAt?: Date;
    acceptance?: boolean;
    discuss_close?: boolean;
  }
  