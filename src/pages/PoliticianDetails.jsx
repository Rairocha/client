import { useContext, useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { PoliticianContext } from "../context/politicians.context"
import { AuthContext } from "../context/auth.context"

import { post } from "../services/authService"

