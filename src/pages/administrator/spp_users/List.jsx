import React, { useEffect, useRef, useState } from 'react'
import ContentHeader from '../../../components/ContentHeader'

import { Grid, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { DataTable } from 'mantine-datatable';
import dayjs from 'dayjs';
import AxiosClient from '../../../Helper/axiosClient';

const List = () => {

    const PAGE_SIZE = 5;

    const [sppUsers, setSppUsers] = useState([
        { id: '2', name: 'Hello world', email: 'example@demo.com', phone: 1234567890, number_of_projects: 10 },
        { id: '3', name: 'Hello world', email: 'example@demo.com', phone: 1234567890, number_of_projects: 10 },
        { id: '4', name: 'Hello world', email: 'example@demo.com', phone: 1234567890, number_of_projects: 10 },
        { id: '1', name: 'Hello world', email: 'example@demo.com', phone: 1234567890, number_of_projects: 10 },
        { id: '5', name: 'Hello world', email: 'example@demo.com', phone: 1234567890, number_of_projects: 10 },
        { id: '6', name: 'Hello world', email: 'example@demo.com', phone: 1234567890, number_of_projects: 10 },
        { id: '7', name: 'Hello world', email: 'example@demo.com', phone: 1234567890, number_of_projects: 10 },
        { id: '8', name: 'Hello world', email: 'example@demo.com', phone: 1234567890, number_of_projects: 10 },
        { id: '9', name: 'Hello world', email: 'example@demo.com', phone: 1234567890, number_of_projects: 10 },
        { id: '10', name: 'Hello world', email: 'example@demo.com', phone: 1234567890, number_of_projects: 10 }
    ]);
    const axios = AxiosClient();

    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(sppUsers.slice(0, PAGE_SIZE));
    const initialRecords = sppUsers.slice(0, PAGE_SIZE);

    const [query, setQuery] = useState('');
    const veteransOnly = useRef(false);
    const [debouncedQuery] = useDebouncedValue(query, 200);

    useEffect(() => {
        const fetchProjects = async () => {
            await axios.get('/admin/all-spp/contractor').then(({ data }) => {
                setSppUsers(data.data.result);
                console.log("user",     data)
            }).catch(({ response }) => {
                window.toastr.error(response.data.message)
            });
        }

        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        setRecords(sppUsers.slice(from, to));
        fetchProjects();
        console.log("Rendering...");
    }, [page, initialRecords.length, sppUsers.length]);

    useEffect(() => {
        const now = dayjs();
        setRecords(
            initialRecords.filter(({ firstName, lastName, department, birthDate }) => {
                if (veteransOnly && now.diff(birthDate, 'years') < 40) {
                    return false;
                }
                if (
                    debouncedQuery !== '' &&
                    !`${firstName} ${lastName} ${department.name} ${department.company.name}`
                        .toLowerCase()
                        .includes(debouncedQuery.trim().toLowerCase())
                ) {
                    return false;
                }
                return true;
            })
        );
    }, [debouncedQuery, veteransOnly]);



    // TODO: Find use for this or delete
    // const handleEdit = (project) => {
    //     const sppUsersList = [...sppUsers], index = sppUsersList.indexOf(project)
    // }

    return (
        <>
            <ContentHeader title="SPP User List" />
            <section className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">List of SPP</h3>
                        </div>
                        <div className="card-body">
                            <Grid align="center" mb="md">
                                <Grid.Col xs={12} sm={12}>
                                    <TextInput
                                        sx={{ flexBasis: '60%' }}
                                        placeholder="Search Spp Users..."
                                        icon={<IconSearch size={16} />}
                                        value={query}
                                        onChange={(e) => setQuery(e.currentTarget.value)}
                                    />
                                </Grid.Col>
                            </Grid>
                            <DataTable
                                withBorder
                                borderRadius="sm"
                                withColumnBorders
                                striped
                                highlightOnHover
                                records={records}
                                columns={[
                                    {
                                        accessor: 'id',
                                    },
                                    {
                                        accessor: 'name',
                                        title: 'Name'
                                    },
                                    {
                                        accessor: 'email',
                                        title: 'Email'
                                    },
                                    {
                                        accessor: 'phone'
                                    },
                                    {
                                        accessor: 'number_of_projects'
                                    }
                                ]}
                                onRowClick={() => alert(records.id)}
                                totalRecords={sppUsers.length}
                                recordsPerPage={PAGE_SIZE}
                                page={page}
                                onPageChange={(p) => setPage(p)}
                                noRecordsText="No records found"
                                loadingText="Loading..."
                                paginationText={({ from, to, totalRecords }) => `Records ${from} - ${to} of ${totalRecords}`}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default List