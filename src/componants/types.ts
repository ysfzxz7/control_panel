import React from "react"


// the link data taypes
export interface linkType  {
    name: string,
    icone: React.ReactNode,
    link: string,
}


// the routes data types
export interface routes {
    name: string,
    link: string,
    element: React.ReactNode
}

//the social media data types
export interface social_media {
    icone?: React.ReactNode,
    number: string,
    button: string,
    color?: string
    icone_color?: string
}

// the searced words
export interface searchWrodType {
    name: string,
    counter : number,
}


//the upload data types
export interface uploadType {
    name: string,
    author: string,
    space: number,
    img: string,
}

//the news data types
export interface newsType {
    title: string,
    desc: string,
    time: number,
    img: string
}


// the tickets data types
export interface ticketsType {
    total: number,
    icone: React.ReactNode,
    tag: string
}

//the data types
export interface tasksType {
    title: string,
    desc: string,
    done: boolean
}

//the projects data type
export interface projectsType {
    name: string,
    progress: number,
}

//the data type for the targets
export interface targetTypes {
    name: string,
    icone: React.ReactNode,
    progress: number,
    amount: number,
}

//the projects type: 
export interface tableTypes {
        name: string, 
        finish_date: string,
        client: string,
        price: number,
        team: string,
        status: string
}

// the friends data types
export interface friendsType {
        name: string,
        bio: string,
        friends: number,
        projects: number,
        articls: number,
        joined: string,
        vip: boolean,
}

// the courses type
export interface coursesType {
    title: string,
    description: string,
    avatar?: string,
    background?: string,
    viewrs: number,
    price: number,
}


// the plans type
export interface plansType {
    title: string,
    price: string,
    access_text: boolean, 
    access_vedios: boolean, 
    access_LeaderBoard: boolean, 
    Ads: boolean, 
    access_Assignment: boolean, 
    daily_Prizes: boolean,
    certificate: boolean,
    gb_Hosting: boolean, 
    access_badge_System: boolean, 
}


//the file types

export interface filesType {
    name: string,
    publisher: string,
    date: string,
    size: string,
    type: string,
}

// the skills data type

export interface skillsType {
 
}

//the data type of the activities

export interface activitiesType {
    logo: string,
    title: string,
    description: string,
    time: string,
    date: string
}