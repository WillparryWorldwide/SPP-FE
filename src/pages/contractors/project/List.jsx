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

    const [projects, setProjects] = useState([
        { id: '1', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '2', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '3', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '4', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '5', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '6', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '7', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '8', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '9', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '10', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '11', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '12', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '13', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '14', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '15', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '16', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '17', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '18', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '19', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '20', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '21', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '22', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '23', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '24', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '25', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '26', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '27', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '28', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '29', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '30', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '31', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
        { id: '32', title: 'Hello world', duration: '20 weeks', status: 10, date: '21st February 2023' },
    ]);
    const axios = AxiosClient();

    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(projects.slice(0, PAGE_SIZE));
    const initialRecords = projects.slice(0, PAGE_SIZE);

    const [query, setQuery] = useState('');
    const veteransOnly = useRef(false);
    const [debouncedQuery] = useDebouncedValue(query, 200);

    useEffect(() => {
        const fetchProjects = async () => {
            await axios.get('/contractor/projects').then(({ data }) => {
                setProjects(data.projects)
            }).catch(({ response }) => {
                window.toastr.error(response.data.message);
            });
        }
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        setRecords(projects.slice(from, to));
        fetchProjects();
    }, [page, initialRecords], projects);

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
    //     const projectList = [...projects], index = projectList.indexOf(project)
    // }

    return (
        <>
            <ContentHeader title="Project List" />
            <section className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">List of Projects</h3>
                        </div>
                        <div className="card-body">
                            <Grid align="center" mb="md">
                                <Grid.Col xs={12} sm={12}>
                                    <TextInput
                                        sx={{ flexBasis: '60%' }}
                                        placeholder="Search Projects..."
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
                                        accessor: 'title',
                                        title: 'Project Title'
                                    },
                                    {
                                        accessor: 'duration',
                                        title: 'Project Duration'
                                    },
                                    {
                                        accessor: 'status'
                                    },
                                    {
                                        accessor: 'date'
                                    }
                                ]}
                                onRowClick={() => alert(records.id)}
                                totalRecords={projects.length}
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