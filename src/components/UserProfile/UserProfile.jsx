import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { USER_PROFILE } from "../../constants/urls";

const trial = USER_PROFILE.db.getDoc;
console.log(trial);

const docRef = doc(db, "name", "SF");
const docSnap = await getDoc(docRef);