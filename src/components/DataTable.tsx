import { useState } from 'react'
import UpdateModal from './UpdateModal';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


function DataTable() {
    let [ open, setOpen ] = useState(false);
    //@ts-ignore
    const { contactData, getData } = useGetData();
    let [ selectionModel, setSelectionModel ] = useState<string[]>([])
    const [row, setRow] = useState({})
    const handleClose = () => {
        setOpen(false)
    }
    

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        setTimeout( () => {window.location.reload()}, 1000)
    }

    const columns: GridColDef[] = [
        // { field: 'id', headerName: "ID", width: 90},
        // { field: 'make', headerName: "Make", flex: 1},
        { field: 'year', headerName: "Year", flex: 1},
        { field: 'model', headerName: "Model", flex: 1},
        { field: 'trim', headerName: "Trim", flex: 1},
        { field: 'color', headerName: "Color", flex: 1},
        { field: 'cost', headerName: "Cost", flex: 1},
        { field: 'action', headerName: '',flex: 1,
            sortable: false,
            //@ts-ignore
            disableClickEventBubbling: true,
            
            renderCell: (params) => {
                const UpdateClick = () => {
                  setRow(params.row)
                  setOpen(true)
            };
                return (
                    <>
                    <button onClick={UpdateClick} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</button>
                    </>
                );
            },
        }
    ]


  return (
    <div>
        <UpdateModal 
            row={row}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}>
            <h2 className="p-3 bg-slate-300 my-2 rounded">My Vehicles</h2>
            <DataGrid
            rows={contactData}
            columns={columns}
            checkboxSelection={true}
            onRowSelectionModelChange={ (item:any) => {setSelectionModel(item)}}
            />
        </div>
    </div>
  )
}

export default DataTable