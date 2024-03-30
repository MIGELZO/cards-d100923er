import { Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

export default function OneCardData({cardData}) {
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Title:<Typography>{}</Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Subtitle:<Typography>{}</Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Email:<Typography>{}</Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Phone:<Typography>{}</Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Website:<Typography>{}</Typography>
                    </TableCell>
                </TableRow>
                
            </TableHead>
        </Table>
    </TableContainer>
  )
}
